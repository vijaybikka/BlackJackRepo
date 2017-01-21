// console.log("we're connected");

(function () {

    var app = angular.module('cardApp',[]);

    app.controller('cardCtrl', ['$scope', function ($scope) {

        $scope.PlayerCards = [];
        $scope.DealerCards = [];
        $scope.PlayerValue = 0;
        $scope.DealerValue = 0;
        $scope.DealerHasAce = false;
        $scope.PlayerHasAce = false;
        //$scope.DisableHungButton = false;
        //$scope.DisablePlayButton = false;

        $scope.blankCard =
        [
            {
                suit: "blank",
                rank: 1,
                name: "blank",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/back.png',
                value: 0
            }
        ];

        $scope.tempCard =
        [
        ];


        $scope.cards =
        [
            //Spade Suit
            {
                suit: "spade",
                rank: 1,
                name: "spade-a",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-A.png',
                value: 11
            },
            {
                suit: "spade",
                rank: 2,
                name: "spade-2",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-2.png',
                value: 2
            },
            {
                suit: "spade",
                rank: 3,
                name: "spade-3",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-3.png',
                value: 3
            },
            {
                suit: "spade",
                rank: 4,
                name: "spade-4",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-4.png',
                value: 4
            },
            {
                suit: "spade",
                rank: 5,
                name: "spade-5",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-5.png',
                value: 5
            },
            {
                suit: "spade",
                rank: 6,
                name: "spade-6",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-6.png',
                value: 6
            },
            {
                suit: "spade",
                rank: 7,
                name: "spade-7",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-7.png',
                value: 7
            },
            {
                suit: "spade",
                rank: 8,
                name: "spade-8",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-8.png',
                value: 8
            },
            {
                suit: "spade",
                rank: 9,
                name: "spade-9",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-9.png',
                value: 9
            },
            {
                suit: "spade",
                rank: 10,
                name: "spade-10",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-10.png',
                value: 10
            },
            {
                suit: "spade",
                rank: 11,
                name: "spade-j",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-J.png',
                value: 10
            },
            {
                suit: "spade",
                rank: 12,
                name: "spade-q",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-Q.png',
                value: 10
            },
            {
                suit: "spade",
                rank: 13,
                name: "spade-k",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/spade-K.png',
                value: 10
            },
            //Diamond Suit
            {
                suit: "diamond",
                rank: 1,
                name: "diamond-a",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-A.png',
                value: 11
            },
            {
                suit: "diamond",
                rank: 2,
                name: "diamond-2",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-2.png',
                value: 2
            },
            {
                suit: "diamond",
                rank: 3,
                name: "diamond-3",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-3.png',
                value: 3
            },
            {
                suit: "diamond",
                rank: 4,
                name: "diamond-4",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-4.png',
                value: 4
            },
            {
                suit: "diamond",
                rank: 5,
                name: "diamond-5",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-5.png',
                value: 5
            },
            {
                suit: "diamond",
                rank: 6,
                name: "diamond-6",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-6.png',
                value: 6
            },
            {
                suit: "diamond",
                rank: 7,
                name: "diamond-7",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-7.png',
                value: 7
            },
            {
                suit: "diamond",
                rank: 8,
                name: "diamond-8",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-8.png',
                value: 8
            },
            {
                suit: "diamond",
                rank: 9,
                name: "diamond-9",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-9.png',
                value: 9
            },
            {
                suit: "diamond",
                rank: 10,
                name: "diamond-10",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-10.png',
                value: 10
            },
            {
                suit: "diamond",
                rank: 11,
                name: "diamond-j",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-J.png',
                value: 10
            },
            {
                suit: "diamond",
                rank: 12,
                name: "diamond-q",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-Q.png',
                value: 10
            },
            {
                suit: "diamond",
                rank: 13,
                name: "diamond-k",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/diamond-K.png',
                value: 10
            },
            // Club Suit
            {
                suit: "club",
                rank: 1,
                name: "club-a",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-A.png',
                value: 11
            },
            {
                suit: "club",
                rank: 2,
                name: "club-2",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-2.png',
                value: 2
            },
            {
                suit: "club",
                rank: 3,
                name: "club-3",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-3.png',
                value: 3
            },
            {
                suit: "club",
                rank: 4,
                name: "club-4",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-4.png',
                value: 4
            },
            {
                suit: "club",
                rank: 5,
                name: "club-5",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-5.png',
                value: 5
            },
            {
                suit: "club",
                rank: 6,
                name: "club-6",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-6.png',
                value: 6
            },
            {
                suit: "club",
                rank: 7,
                name: "club-7",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-7.png',
                value: 7
            },
            {
                suit: "club",
                rank: 8,
                name: "club-8",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-8.png',
                value: 8
            },
            {
                suit: "club",
                rank: 9,
                name: "club-9",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-9.png',
                value: 9
            },
            {
                suit: "club",
                rank: 10,
                name: "club-10",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-10.png',
                value: 10
            },
            {
                suit: "club",
                rank: 11,
                name: "club-j",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-J.png',
                value: 10
            },
            {
                suit: "club",
                rank: 12,
                name: "club-q",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-Q.png',
                value: 10
            },
            {
                suit: "club",
                rank: 13,
                name: "club-k",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/club-K.png',
                value: 10
            },
            //Heart Suit
            {
                suit: "heart",
                rank: 1,
                name: "heart-a",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-A.png',
                value: 11
            },
            {
                suit: "heart",
                rank: 2,
                name: "heart-2",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-2.png',
                value: 2
            },
            {
                suit: "heart",
                rank: 3,
                name: "heart-3",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-3.png',
                value: 3
            },
            {
                suit: "heart",
                rank: 4,
                name: "heart-4",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-4.png',
                value: 4
            },
            {
                suit: "heart",
                rank: 5,
                name: "heart-5",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-5.png',
                value: 5
            },
            {
                suit: "heart",
                rank: 6,
                name: "heart-6",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-6.png',
                value: 6
            },
            {
                suit: "heart",
                rank: 7,
                name: "heart-7",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-7.png',
                value: 7
            },
            {
                suit: "heart",
                rank: 8,
                name: "heart-8",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-8.png',
                value: 8
            },
            {
                suit: "heart",
                rank: 9,
                name: "heart-9",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-9.png',
                value: 9
            },
            {
                suit: "heart",
                rank: 10,
                name: "heart-10",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-10.png',
                value: 10
            },
            {
                suit: "heart",
                rank: 11,
                name: "heart-j",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-J.png',
                value: 10
            },
            {
                suit: "heart",
                rank: 12,
                name: "heart-q",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-Q.png',
                value: 10
            },
            {
                suit: "heart",
                rank: 13,
                name: "heart-k",
                img: 'https://vijaybikkastorage1.blob.core.windows.net/blackjack/heart-K.png',
                value: 10
            }
        ];

		$scope.initializeGameControls = function () {
		   
		    
		};

		$scope.endGameControls = function () {
		    $scope.DisableHungButton = true;
		    $scope.DisablePlayButton = true;
		};

		//$scope.initializeNewGame();
		$scope.newGame = function () {
			$scope.PlayerCards = [];
		    $scope.DealerCards = [];
            $scope.Message = '';
		    $scope.PlayerValue = 0;
		    $scope.DealerValue = 0;
		    $scope.tempCard = [];
		    $scope.initializePlayer();
		    $scope.initializeDealer();
		    // $scope.initializeGameControls();
		    $scope.isDisabledPlay = false;
		    $scope.isDisabledHung = false;
		    $scope.isDisablednewGame = true;
		   
		};

		$scope.initializePlayer = function () {
		    var randomValue = $scope.Random();
		    var drawedCard = $scope.cards.splice(randomValue, 1)[0];
		    $scope.PlayerCards.push(drawedCard);
		    $scope.PlayerValue += drawedCard.value;
		    drawedCard = $scope.cards.splice(randomValue, 1)[0];
		    $scope.PlayerCards.push(drawedCard);
		    $scope.PlayerValue += drawedCard.value;
		};

		$scope.initializeDealer = function () {
		    var randomValue = $scope.Random();
		    var drawedCard = $scope.cards.splice(randomValue, 1)[0];
		    $scope.blankCard[0].value = drawedCard.value;
		    $scope.tempCard.push(drawedCard);
		    $scope.DealerCards.push($scope.blankCard[0]);
		    //$scope.DealerCards.push(drawedCard);
		    //$scope.DealerValue += drawedCard.Value;
            randomValue = $scope.Random();
		    drawedCard = $scope.cards.splice(randomValue, 1)[0];
		    $scope.DealerCards.push(drawedCard);
		    $scope.DealerValue += drawedCard.value;
		};

		$scope.play = function () {
		    var randomValue = $scope.Random();
		    var drawedCard = $scope.cards.splice(randomValue, 1)[0];
		    $scope.PlayerCards.push(drawedCard);
		    if (drawedCard.value == 11) {
		        if ($scope.PlayerValue + drawedCard.value > 21) {
		            $scope.PlayerValue += 1;
		        } else {
		            $scope.PlayerValue += 11;
		        }

		    } else {
		        $scope.PlayerValue += drawedCard.value;
		    }
		  
		    if ($scope.PlayerValue == 21) {
		        $scope.Message = 'Player Wins';
		        $scope.isDisabledPlay = true;
		    $scope.isDisabledHung = true;
		    $scope.isDisablednewGame = false;
		    }

		    if($scope.PlayerValue > 21)
		    {
		        $scope.Message = 'Dealer Wins';
		        $scope.isDisabledHung = true;
		        $scope.isDisabledPlay = true;
		        $scope.isDisablednewGame = false;
		    }
		};

		$scope.done = function () {
		    $scope.DealerValue += $scope.DealerCards[0].value;
		    $scope.DealerCards[0] = $scope.tempCard[0];
		    while ($scope.DealerValue < $scope.PlayerValue && $scope.DealerValue < 21)
		    {
		        var randomValue = $scope.Random();
		        var drawedCard = $scope.cards.splice(randomValue, 1)[0];
		        $scope.DealerCards.push(drawedCard);
		        if (drawedCard.value == 11) {
		            if ($scope.DealerValue + drawedCard.value > 21) {
		                $scope.DealerValue += 1;
		            } else {
		                $scope.DealerValue += 11;
		            }

		        } else {
		            $scope.DealerValue += drawedCard.value;
		        }
		    }

		    if ($scope.DealerValue > $scope.PlayerValue && $scope.DealerValue < 21)
		    {
		        $scope.Message = 'Dealer Wins';
		    }
		    else if ($scope.DealerValue >  21)
		    {
		        $scope.Message = 'Player Wins';
		    }else if ($scope.DealerValue == $scope.PlayerValue) {
		        $scope.Message = 'Its a Tie!';
		    }

		  
		        $scope.isDisabledHung = true;
		        $scope.isDisabledPlay = true;
		        $scope.isDisablednewGame = false;
		    
		    
		};

		$scope.Random = function () {
		    var randomValue;
		    randomValue = Math.random() * ($scope.cards.length - 0) + 0;
		    console.log(randomValue);
		    return Math.round(randomValue);
		};



		

	}]);
    app.directive('myCard', function() {
        return {
            restrict: 'E',
            templateUrl: 'my-card.html'
        }

    });
})();

















