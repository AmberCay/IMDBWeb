class Professional {
    
    // constructor
    
    constructor(name, age, weight, height,  nationality, profession, photo) {
        this.name = name
        this.age = age
        this.weight = weight
        this.height = height
        this.isRetired 
        this.nationality = nationality
        this.oscarsNumber 
        this.profession = profession
        this.photo = photo
    }
}

let gC = new Professional('George Clooney', 64, 96, 174, 'American', 'Actor & Director', 'https://media1.popsugar-assets.com/files/thumbor/7qHotW3DcbgESrb5Of6wHU6KbEA/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/12/02/690/n/1922153/tmp_cvFEzA_2bf911c290a60e9d_GettyImages-955739684.jpg')
let leo = new Professional('Leonardo DiCaprio', 58, 84, 182, 'American', 'Actor & Producer', 'http://image.tmdb.org/t/p/original/grEohuTduwtVEgoYMFlQ8Jfei7o.jpg')

let profList = [gC, leo]

jQuery(() => {
    $("#nav-professional").on('click', () => {
        $("#prof-area").empty()
        for (const person of profList) {
            $("#prof-area").append(`<div class="col">
                                        <div class="card mb-2" style="width: 18rem;">
                                            <img src="${person.photo}" class="card-img-top img-fluid" alt="${person.name}">
                                            <div class="card-body">
                                            <h5 class="card-title">${person.name}</h5>
                                            <ul class="list-group list-group-flush" id="card-info">
                                                <li class="list-group-item">Age -- ${person.age}</li>
                                                <li class="list-group-item">Weight -- ${person.weight} kg</li>
                                                <li class="list-group-item">Height -- ${person.height} cm</li>
                                                <li class="list-group-item">Are they retired? -- ${person.isRetired}</li>
                                                <li class="list-group-item">Nationality -- ${person.nationality}</li>
                                                <li class="list-group-item">How many oscars do they have? -- ${person.oscarsNumber}</li>
                                                <li class="list-group-item">What is their profession? -- ${person.profession}</li>
                                            </ul>
                                            <div class="card-body">
                                            <a href="#" class="card-link">More info</a>
                                            </div>
                                        </div>
                                    </div>`)
                }
    })
})
