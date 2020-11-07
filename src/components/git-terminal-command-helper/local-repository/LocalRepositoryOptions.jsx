const LocalRepositoryOptions = [
    {
      id:1,
      selectedOption:'None',
      label:'',
      aditionalLabel:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:false,
      code:'',
      description:''
    },
    {
      id:2,
      selectedOption:'Start local repository',
      label:'Start Local Repository',
      aditionalLabel:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git init',
      description:'Creates repository in current folder.'
    },
    {
      id:3,
      selectedOption:'Check repository status',
      label:'Check status',
      aditionalLabel:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git status',
      description:'Returns status of current repository'
      },
    {
      id:4,
      selectedOption:'Track and stage inputed file',
      label:'Track and stage file',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git add',
      description:'Tracks and stages selected file. ( git add . ) will do same for all files.'
      },
    {
      id:5,
      selectedOption:'Unstage file',
      label:'Unstage file',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git restore --staged',
      description:'Unstages and untracks inputed file.'
      },
    {
      id:6,
      selectedOption:'Force remove file',
      label:'Force remove file',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git rm -f',
      description:'Forces unstage, untrack and removal of inputed file.'
      },
    {
      id:7,
      selectedOption:'Perform commit',
      label:'Commit message',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:true,
      codeBeforeInput:true,
      code:'git commit -m',
      description:'Creates commit snapshot with inputed message.'
      },
    {
      id:8,
      selectedOption:'Ammends last commit',
      label:'Ammend message',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:true,
      codeBeforeInput:true,
      code:'git commit --ammend -m',
      description:'Copies over last commit snapshot and message.'
      },
    {
      id:9,
      selectedOption:'See commit log',
      label:'',
      aditionalLabel:'',
      hasUserInput:false,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git log',
      description:'Returns log of commits performed. ( git log --pretty=oneline )   To see hash and message in same line.'
      },
    {
      id:10,
      selectedOption:'Travel to commit',
      label:'Imput commit hash',
      aditionalLabel:'',
      hasUserInput:true,
      hasMultipleUserInput:false,
      isItAMessage:false,
      codeBeforeInput:true,
      code:'git checkout',
      description:'Moves current position into imputed commit using hash'
      },
    
    ]
    
    export default LocalRepositoryOptions