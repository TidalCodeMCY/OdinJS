var gameBoard = {
  board: [],
  init: function(){
    this.cacheDom();
    this.createObj();
  },
  createObj: function(){
    for(num=-1; num<8; num++){
      gameBoard = document.createElement('div');
      this.assignId(gameBoard,num);
    };
  },
  assignId: function(gameBoard,num){
    id = num + 1;
    gameBoard.id = `${id}`;
    this.pushObj(gameBoard);
  },
  pushObj: function(gameBoard){
    this.board.push(gameBoard);
    this.render();
  },
  cacheDom: function() {
    this.$el = $('#gameboard');
    this.template = this.$el.find('#Game-Board').html();
  },
  render: function() {
    var data = {
        board: this.board,
    };
    this.$el.html(Mustache.render(this.template, data));
  },
};
gameBoard.init();

var createPlayer = (function() {
  // Below are the click event listeners ive added so far.
  $('#submit').on('click', (e) => {
    e.preventDefault();
    playerChoice();
  });

  var players = [];
  //This function below will grab the form data submitted and store it and assign it.
  function playerChoice(){
    let dataName = document.querySelector('#name').value;
    let signName = document.querySelector('#sign').value;
    createPlayers(dataName,signName);
  };

  function createPlayers(dataName,signName){
    var player1 = {
      name: dataName,
      sign: signName
    };
    players.splice(0,1);
    players.push(player1);
    clearChoices();
  };

  function clearChoices(){
    $('#name').val('');
    $('#sign').val('');
  };

  return players;
})();

var gameLoop = (function(){
  
  //This is the event handler for the gameboard to find the id of the clicked on.
  $(".div").on('click', function() {
    var index = $('.div').index(this);
    var idNum =`num${index}`;
    assignId(idNum,index);
  });
  
  $("#reset").on('click', function() {
    resetBoard();
  });

  function assignId(idNum,index){
    const htmlId = document.getElementById(`${idNum}`);
    var indexNum = index;
    GAME(htmlId,indexNum);
  };

  $("#reset").on('click', function() {
    resetBoard();
    });

  function resetBoard() {
    $(".div").empty();
    createPlayer.splice(0,1);
    console.log(gameBoardLayout);
  }

  function GAME(id, indexVal) {
    var playersSign = createPlayer[0].sign;
    var playersName = createPlayer[0].name;
    var boardIndex = indexVal;
    var gameId = id;
    var playersTurn = true;
    var aiInit = intializeAi();
    var gameBoardLayout = [];

    if(playersTurn = true){
      playerTurn();
    };

    function playerTurn(){
        gameId.textContent = playersSign;
        updateUi();
        computerPlays();
    };

    function updateUi(){
      gameBoardLayout.splice(0,gameBoardLayout.length);
      gameBoardLayout.push($('#num0').text(),$('#num1').text(),$('#num2').text(),$('#num3').text(),$('#num4').text(),$('#num5').text(),$('#num6').text(),$('#num7').text(),$('#num8').text());
    };

    function intializeAi() {
      var comSign;
      if(playersSign === "X"){
        comSign = "O";
      }else if(playersSign === "O"){
        comSign = "X";
      };
      return comSign;
    };
    
    (function winner(){
      
      var zero = gameBoardLayout[0];
      var one = gameBoardLayout[1];
      var two = gameBoardLayout[2];
      var three = gameBoardLayout[3];
      var four = gameBoardLayout[4];
      var five = gameBoardLayout[5];
      var six = gameBoardLayout[6];
      var seven = gameBoardLayout[7];
      var eight = gameBoardLayout[8];
      var playerWinsSign = playersSign + playersSign + playersSign;
      var computerWinsSign = aiInit + aiInit + aiInit;
  
      if(zero + one + two === playerWinsSign || three + four + five === playerWinsSign || 
         six + seven + eight === playerWinsSign || zero + three + six === playerWinsSign || 
         one + four + seven === playerWinsSign || two + five + eight === playerWinsSign || 
         zero + four + eight === playerWinsSign || two + four + six === playerWinsSign){
        playerWins();
      }else if(zero + one + two === computerWinsSign || three + four + five === computerWinsSign || 
        six + seven + eight === computerWinsSign || zero + three + six === computerWinsSign || 
        one + four + seven === computerWinsSign || two + five + eight === computerWinsSign || 
        zero + four + eight === computerWinsSign || two + four + six === computerWinsSign){
        computerWins();
      }else{
        if(gameBoardLayout.includes("")){
          return;
        }else{
          tieGame();
        }
      }
      console.log(gameBoardLayout);
    })();
  
    function playerWins(){
      alert('playerwins!');
    };
  
    function computerWins(){
      alert('computerwins!');
    };
  
    function tieGame(){
      alert('TieGame!');
    };

    function computerPlays(){

      function printComChoice(cs,gid){
        var lPC = gid.id;
        var cS = cs;

        var c0 = gameBoardLayout[0];
        var c1 = gameBoardLayout[1];
        var c2 = gameBoardLayout[2];
        var c3 = gameBoardLayout[3];
        var c4 = gameBoardLayout[4];
        var c5 = gameBoardLayout[5];
        var c6 = gameBoardLayout[6];
        var c7 = gameBoardLayout[7];
        var c8 = gameBoardLayout[8];

        if(cS === "X" || cS === "O"){
          winCond();
        };
        /*This check win conditions and prints to counter those first and if they dont present 
        a spot then it runs the newChoice() function to find an emtp spot and place it.*/

        
        function winCond(){
          if(lPC === "num0"){
            if(c1 === playersSign){
              if(c2 === ""){
                $('#num2').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c2 === playersSign){
              if(c1 === ""){
                $('#num1').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c3 === playersSign){
              if(c6 === ""){
                $('#num6').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c6 === playersSign){
              if(c3 === ""){
                $('#num3').text(cS);
                updateUi();
                }else{
                  newChoice();
                };
            }else if(c4 === playersSign){
              if(c8 === ""){
                $('#num8').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c8 === playersSign){
              if(c4 === ""){
                $('#num4').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else{
              newChoice();
            };
            
          }else if(lPC === "num1"){
            if(c0 === playersSign){
              if(c2 === ""){
                $('#num2').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c2 === playersSign){
              if(c0 === ""){
                $('#num0').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c4 === playersSign){
              if(c7 === ""){
                $('#num7').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c7 === playersSign){
              if(c4 === ""){
                $('#num4').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else{
              newChoice();
            };
            
          }else if(lPC === "num2"){
            if(c0 === playersSign){
              if(c1 === ""){
                $('#num1').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c1 === playersSign){
              if(c0 === ""){
                $('#num0').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c4 === playersSign){
              if(c6 === ""){
                $('#num6').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c6 === playersSign){
              if(c4 === ""){
                $('#num4').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c5 === playersSign){
              if(c8 === ""){
                $('#num8').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c8 === playersSign){
              if(c5 === ""){
                $('#num5').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else{
              newChoice();
            };
            
          }else if(lPC === "num3"){
            if(c0 === playersSign){
              if(c6 === ""){
                $('#num6').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c6 === playersSign){
              if(c0 === ""){
                $('#num0').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c4 === playersSign){
              if(c5 === ""){
                $('#num5').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c5 === playersSign){
              if(c4 === ""){
                $('#num4').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else{
              newChoice();
            };
            
          }else if(lPC === "num4"){
            if(c0 === playersSign){
              if(c8 === ""){
                $('#num8').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c8 === playersSign){
              if(c0 === ""){
                $('#num0').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c1 === playersSign){
              if(c7 === ""){
                $('#num7').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c7 === playersSign){
              if(c1 === ""){
                $('#num1').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c2 === playersSign){
              if(c6 === ""){
                $('#num6').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c6 === playersSign){
              if(c2 === ""){
                $('#num2').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c3 === playersSign){
              if(c5 === ""){
                $('#num5').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c5 === playersSign){
              if(c3 === ""){
                $('#num3').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else{
              newChoice();
            };
            
          }else if(lPC === "num5"){
            if(c2 === playersSign){
              if(c8 === ""){
                $('#num8').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c8 === playersSign){
              if(c2 === ""){
                $('#num2').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c4 === playersSign){
              if(c3 === ""){
                $('#num3').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c3 === playersSign){
              if(c4 === ""){
                $('#num4').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else{
              newChoice();
            };
            
          }else if(lPC === "num6"){
            if(c0 === playersSign){
              if(c3 === ""){
                $('#num3').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c3 === playersSign){
              if(c0 === ""){
                $('#num0').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c4 === playersSign){
              if(c2 === ""){
                $('#num2').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c2 === playersSign){
              if(c4 === ""){
                $('#num4').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c7 === playersSign){
              if(c8 === ""){
                $('#num8').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c8 === playersSign){
              if(c7 === ""){
                $('#num7').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else{
              newChoice();
            };
            
          }else if(lPC === "num7"){
            if(c4 === playersSign){
              if(c1 === ""){
                $('#num1').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c1 === playersSign){
              if(c4 === ""){
                $('#num4').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c8 === playersSign){
              if(c6 === ""){
                $('#num6').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c6 === playersSign){
              if(c8 === ""){
                $('#num8').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else{
              newChoice();
            };
    
          }else if(lPC === "num8"){
            if(c5 === playersSign){
              if(c2 === ""){
                $('#num2').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c2 === playersSign){
              if(c5 === ""){
                $('#num5').text(cS);
                updateUi();
              }else{
                newChoice();
              }
            }else if(c7 === playersSign){
              if(c6 === ""){
                $('#num6').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c6 === playersSign){
              if(c7 === ""){
                $('#num7').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c4 === playersSign){
              if(c0 === ""){
                $('#num0').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else if(c0 === playersSign){
              if(c4 === ""){
                $('#num4').text(cS);
                updateUi();
              }else{
                newChoice();
              };
            }else{
              newChoice();
            };
  
          };
        };
        

        function newChoice(){
          if(c4 === ""){
            $('#num4').text(cS);
            updateUi();
          }else if(c3 === ""){
            $('#num3').text(cS);
            updateUi();
          }else if(c2 === ""){
            $('#num2').text(cS);
            updateUi();
          }else if(c5 === ""){
            $('#num5').text(cS);
            updateUi();
          }else if(c7 === ""){
            $('#num7').text(cS);
            updateUi();
          }else if(c6 === ""){
            $('#num6').text(cS);
            updateUi();
          }else if(c0 === ""){
            $('#num0').text(cS);
            updateUi();
          }else if(c8 === ""){
            $('#num8').text(cS);
            updateUi();
          }else if(c1 === ""){
            $('#num1').text(cS);
            updateUi();
          };
          console.log(c4);
        };
      };
    printComChoice(aiInit,gameId); 
    };  

  };

})();



