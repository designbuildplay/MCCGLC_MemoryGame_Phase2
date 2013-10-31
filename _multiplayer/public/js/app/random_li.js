
//Randomise the oder of the list cards // ================
			
			function randomizeItems(items)
				{
				 var cached = items.slice(0), temp, i = cached.length, rand;

				    while(--i)
				    {
				        rand = Math.floor(i * Math.random());
				        temp = cached[rand];
				        cached[rand] = cached[i];
				        cached[i] = temp;
				    }
				    return cached;
				}

			function randomizeList()
				{

					var list = document.getElementById("cardlist");
					var listMatched = document.getElementById("cardlistMatch");

				    var nodes = list.children, i = 0;
				    nodes = Array.prototype.slice.call(nodes);
				    nodes = randomizeItems(nodes);

				    while(i < nodes.length)
				    {
				        list.appendChild(nodes[i]);
				        ++i;
				    }
					list.style.display="block";
					console.log("MIXUP THE CARDS")

			}

			