type Action =
  | {
      kind: 'ADD';
      title: string;
    }
  | {
      kind: 'DELETE';
      id: number;
    }
  | {
      kind: 'UPDATE';
      id: number;
      title: string;
    };

// interface Todo {
//   id: number;
//   title: string;
// }

// const initialState = {
//   loading: false,
//   todos: [] as Array<Todo>
// };
// type State = typeof initialState;

// const reducer = (state: State, action: Action) => {
//     switch (action.kind) {
//         case "": {
//             return action.
//         }
//     }
// }