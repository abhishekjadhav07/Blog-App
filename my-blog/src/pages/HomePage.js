import SimpleImageSlider from "react-simple-image-slider";

const sliderImages = [
    {
        url : "https://media.istockphoto.com/id/1093508248/photo/modern-work-table-with-computer-laptop-and-cityscapes-view-from-window-business-concepts-ideas.jpg?b=1&s=170667a&w=0&k=20&c=tE2s9RgqmXEzaKl08g8O95CBb4mrptJspmnqNJ1YSn8="
    },
    {
        url : "data:image/png;base64,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"
    },
 ];
const HomePage = () => (
    <>
        
    <h1 style={{textAlign: 'center'  }}>Hello, Welcome to TechTalk 💻!</h1>

    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    }}>
    {/* <img style={{ width: 400, height: 300 }} src={home} className="App-logo" alt="home image" /> */}
    
    <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showNavs={true}
         />
    </div>
    <p>
    Welcome to TechTalk, your ultimate destination for all things tech! Our blog is a hub of cutting-edge information, insightful articles, and expert opinions that keep you up-to-date with the dynamic world of technology.
    </p>
    <p>
At TechTalk, we delve into a wide range of tech topics, covering everything from the latest gadgets and innovations to emerging trends and industry breakthroughs. Whether you're a tech enthusiast, a professional seeking in-depth knowledge, or simply curious about the digital realm, we have you covered.
    </p>
    <p>
Explore our diverse collection of articles, carefully crafted by our team of passionate tech writers and industry experts. Discover in-depth reviews of the hottest smartphones, tablets, laptops, and smart devices, helping you make informed purchasing decisions.
    </p>
    <p>
        Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
        Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
        nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
        sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
        interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
        consequat quam. Vivamus accumsan dui in facilisis aliquet.,
    </p>
    <p>
        Etiam nec lectus urna. Sed sodales ultrices dapibus. 
        Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
        nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
        sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
        interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
        consequat quam. Vivamus accumsan dui in facilisis aliquet.,
    </p>
    </>
)

export default HomePage;