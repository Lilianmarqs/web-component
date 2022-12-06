class Cardnews extends HTMLElement{
    constructor(){
        super(); 
        const shadow = this.attachShadow({ mode:"open"}); 
        shadow.appendChild(this.bild());
        shadow.appendChild(this.styles());
    }

    bild(){ 
        const componentRoot = document.createElement("div"); 
        componentRoot.setAttribute("class", "card"); 

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left"); 

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("Autor") || "By Anonymus"); 

        const linkTitle = document.createElement("a"); 
        linkTitle.textContent = this.getAttribute("tittle")
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("P"); 
        newsContent.textContent = this.getAttribute("contet"); 

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        const cardRigh = document.createElement("div");
        cardRigh.setAttribute("class", "card__rigth"); 

        const newsImage = document.createElement("img"); 
        newsImage.src = this.getAttribute("photo") || "assets/defaltph.jpg"
        newsImage.alt = "Foto da noticia"
        cardRigh.appendChild(newsImage); 

        componentRoot.appendChild(cardLeft); 
        componentRoot.appendChild(cardRigh); 

        return componentRoot; 
    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'segoe UI', 'sans-serif';
        }
        
        .card{
            width: 80%;
            box-shadow: 10px 10px 15px 1px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 15px 1px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 15px 1px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left, .card__rigth{
            border: 0;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span{
            font-weight: 400;
        }
        
        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .card__left > p{
            color: rgb(77, 74, 74);
        }`
        return style;  

    }
}

customElements.define("card-news", Cardnews); 