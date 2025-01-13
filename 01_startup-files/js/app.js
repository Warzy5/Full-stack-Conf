const $InputName = document.querySelector("#name")
const $jobSelect = document.querySelector("#title")
const $otherSelect = document.querySelector("#other-title")

console.log($InputName)
console.log($jobSelect)



document.addEventListener("DOMContentLoaded", function(){
    console.log("hello")
    $InputName.focus()


    $jobSelect.addEventListener("change", function(e) {
        console.log("====")
        console.log(e.target.value)
        console.log("====")

        if(e.target.value === "other") {
            console.log("c'est bon")
            $otherSelect.classList.remove('is-hidden')
        }else{
            console.log("c'est pas bon")
            $otherSelect.classList.add('is-hidden')
        }
    })
})

