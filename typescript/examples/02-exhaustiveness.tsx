type Size = 'small' | 'medium' | 'large';

const pixels = (size: Size) => {
  switch (size) {
    case 'small':
      return 10;
    case 'medium':
      return 15;
  }
};