const products = [
    { title: "mon titre", description: "Porro, id voluptate repellat, maiores eum iste voluptates vel facere, enim numquam veniam quidem neque ipsa", images: "./img/monimg.png" },
    { title: "mon titre 2", description: "La description 2", images: "assets/images/product_0.jpg" },
    { title: "mon titre", description: "Porro, id voluptate repellat, maiores eum iste voluptates vel facere, enim numquam veniam quidem neque ipsa", images: "./img/product_1.jpg" },
    { title: "mon titre", description: "Quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit.", images: "assets/images/product_2.jpg" },
    { title: "mon titre", description: "Porro, id voluptate repellat, maiores eum iste voluptates vel facere, enim numquam veniam quidem neque ipsa", images: "./img/product_3.jpg" },
    { title: "mon titre", description: "Quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit.", images: "assets/images/product_4.jpg" },
    { title: "mon titre", description: "Porro, id voluptate repellat, maiores eum iste voluptates vel facere, enim numquam veniam quidem neque ipsa", images: "./img/product_5.jpg" },
]

document.addEventListener("DOMContentLoaded", () => {
    // récupération de la div qui va englober tout nos produits.
    const divContainerProducts = document.getElementsByClassName("container-products");

    // Génération des cartes
    for (let i = 0; i < products.length; i++) {
        // Générer la div qui englobe mon produit
        const divWrapperCard = document.createElement("div")
        divWrapperCard.setAttribute("class", "card-product")
        divContainerProducts[0].append(divWrapperCard)

        // Génération div au sein de notre cardWrapper qui contient l'image du produit
        const divImage = document.createElement("div")
        divImage.setAttribute("class", "container-product-img")
        divWrapperCard.append(divImage)

        //Génération de l'image au sein de la div image
        let images = document.createElement("img")
        images.setAttribute("src", `assets/images/product_${i}.jpg`)
        images.setAttribute("class", 'product-img')
        divImage.append(images)

        // Générer la div qui englobe le titre, la description et options panier
        const divBodyProduct = document.createElement("div")
        divBodyProduct.setAttribute("class", "card-body-product")
        divWrapperCard.append(divBodyProduct)

        // Générer le titre
        const title = document.createElement("h3")
        title.setAttribute("class", "title-product")
        title.textContent = products[i].title
        divBodyProduct.append(title)

        // Générer le paragraphe
        const description = document.createElement("p")
        description.setAttribute("class", "description-product")
        description.textContent = products[i].description
        divBodyProduct.append(description)

        // div qui contient ajout au panier
        const divFooterCard = document.createElement("div")
        divFooterCard.setAttribute("class", "footer-card")
        divBodyProduct.append(divFooterCard)

        const divFooterQte = document.createElement("div")
        divFooterQte.setAttribute("class", "footer-card-qte")
        divFooterCard.append(divFooterQte)

        //Générer bouton -
        const btnLess = document.createElement("button")
        btnLess.setAttribute("class", "btn-product-qte")
        btnLess.textContent = "-"
        divFooterQte.append(btnLess)

        // Générer Qte
        let strong = document.createElement("strong")
        strong.textContent = 3
        divFooterQte.append(strong)

        less(btnLess, strong)

        const btnMore = document.createElement("button")
        btnMore.setAttribute("class", "btn-product-qte")
        btnMore.textContent = "+"
        divFooterQte.append(btnMore)

        // Bouton ajouter au panier
        const btnShop = document.createElement("button")
        btnShop.setAttribute("class", "btn-product")
        btnShop.textContent = "Ajouter au panier"
        divFooterCard.append(btnShop)

    }

    const less = (btnLess, strong) => {
        const value = strong.value
        btnLess.addEventListener("click", () => {
            if (value > 0) {
                value--
            }
        })
    }
})
