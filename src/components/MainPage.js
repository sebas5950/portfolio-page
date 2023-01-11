import image from '../assets/IMG_3046.jpg'
function MainPage() {
    console.log(image)
    return(
        <div class="">
            <img class="img-fluid" alt="" src={image} />
        </div>
    )
}

export default MainPage