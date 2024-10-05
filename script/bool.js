let wnd = document.getElementById("window")
const star = document.querySelector("#st")
var inputed = document.querySelector("#input")
const all = document.querySelector('body')


star.addEventListener('click', function() {
    // const numberofrounds = inputed.value
    window.innerHTML = ``
    wnd.innerHTML = `
                <div id = "upper">
                    <span id = "humanscore">0</span>
                    <span id ="filler">Round</span>
                    <span id = "compscore">0</span>
                </div>
                <div id = "middle">
                    <div id = "human"><img src = "Images/rock.png"></div>
                    <div id = "Round">1</div>
                    <div id = "computer"><img src="Images/rock.png"></div>
                </div>
                <div id = "lower">
                    <div id = "option">
                        <button id = "paper"><img src="Images/pap.png"></button>
                        <button id = "rock"><img src="Images/rock.png"></button>
                        <button id = "scis"><img src ="Images/sci.png"></button>
                    </div>
                    <div id = "rst">
                        <button id = "reset"><img src="Images/reset.jpg"></button>
                    </div>
                </div>
                `;
    const script = document.createElement('script');
    script.src = 'script/script.js';
    script.defer = true;
    
    script.onload = function() {
      init(inputed.value);
    };
    
    wnd.appendChild(script);

});

