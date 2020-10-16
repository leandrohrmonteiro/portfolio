
const InlineStyles = [
    {
      value: 'Bold',
      style: 'BOLD'
    },

    {
      value: 'Italic',
      style: 'ITALIC'
    },

    {
      value: 'Underline',
      style: 'UNDERLINE'
    },

    {
      value: 'Strikethrough',
      style: 'STRIKETHROUGH'
    },

    {
      value: 'Code',
      style: 'CODE'
    }
  ];


  const StyleMap = {
    'HIGHLIGHT': {
      'backgroundColor': 'red',
      'color': 'white',
    },

    'CODESECTION': {
      'backgroundColor': 'orange',
      'color': 'white',
      'border': '0.3em solid orange',
      'borderRadius': '5px',
      'margin': '20px',
      'fontWeight': 'bold',
    }
  };

  export {InlineStyles, StyleMap}