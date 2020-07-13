var $KAO = {};

const DELAY_TYPE = {
  '2g': 100000,
  '3g': 10000,
  '4g': 4000,
  '5g': 300,
}

const loading = (item, time, chart, repeatType = false) => {
  var i = 0, loading = `[${item + ' '}]`;
  return setInterval(() => {
    if (i > time) loading = item; i = 0;
    console.clear();
    console.log(loading += chart)
    if (repeatType) {
      i++
    }
  }, 250);

}

var CONFIG = {
  _delay: DELAY_TYPE["4g"]
}

var KAO_FUNC_LIB = {
  ADD: 'add',
  MINUS: 'minus',
  MULT: 'mult'
}

var getFuncDB = () => {
  return {
    ADD: {
      customFuncName: KAO_FUNC_LIB.ADD,
      agrs: ["a", "b"],
      f_body: "return a + b;",
    },
    MINUS: {
      customFuncName: KAO_FUNC_LIB.MINUS,
      agrs: ["a", "b"],
      f_body: "return a - b;",
    },
    MULT: {
      customFuncName: KAO_FUNC_LIB.MULT,
      agrs: ["a", "b"],
      f_body: "return a * b;",
    }
  }
}

var funcBuilt = (
  { agrs, f_body, customFuncName }
) => {
  $KAO[customFuncName] = Function(...agrs, f_body)
}

const getAddFuncFromServer = (resolve, reject) => {
  try {
    setTimeout(() => {
      try {
        console.log('getAddFuncFromServer', getFuncDB());
        resolve(getFuncDB());
      } catch (msg) {
        reject(`Error in callback ${msg}`);
      }
      return;
    }, CONFIG._delay);
  } catch (err) {
    reject(`Error during setup: ${err}`);
  }
}


const APP = async () => {
  var func = {};
  // GET func data from server 
  const showLoading = loading('LOADING:', 5, '.', false)
  const funcs = await (new Promise(getAddFuncFromServer))
    .then((funcs) => {
      console.log("done");

      clearInterval(showLoading);
      return funcs;
    })

  // Built global func

  const invokeAllKAOfunc = () => {
    for (const func in funcs) {
      if (funcs.hasOwnProperty('ADD')) {
        const prototype = funcs[func];
        console.info(`[Build] function ${prototype.customFuncName}(${prototype.agrs}){ 
          ${prototype.f_body}
        } SUCCESS !`);
        funcBuilt(prototype)
      }
    }
  }

  invokeAllKAOfunc();

  console.log('add(4,5) Result=', $KAO.add(4, 5))
  console.log('minus(4,5) Result=', $KAO.minus(4, 5))
  console.log('mult(4,5) Result=', $KAO.mult(4, 5))
}


APP();