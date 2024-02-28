import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <>
      <h1>Portfolio</h1>

      <article className="row">
        <div className="col-12 col-lg-6">
          <h2>Bucket List</h2>
          <p>https://github.com/jennikaelisson/bucket-list
            A feature-rich bucket list application crafted with React and
            TypeScript. Users can seamlessly add, remove, and mark items as
            completed on their personal bucket list. The application goes beyond
            the basics, offering an array of functionalities to enhance the user
            experience.
            <br />
            <br />
            The app provides the convenience of sorting the list alphabetically,
            ensuring an organized display of goals. For users who are just
            getting started, a pre-populated list is available to kickstart
            their journey. Deleting items from the list is a breeze, and the
            ability to mark/unmark items as complete adds an extra layer of
            customization.
            <br />
            <br />
            This project not only serves as a testament to my growing
            proficiency in React and TypeScript but also showcases my commitment
            to delivering a polished, user-friendly application with a focus on
            both functionality and aesthetics.
          </p>
        </div>{" "} <div  className="col-12 col-lg-6">
        <Link to="https://github.com/jennikaelisson/bucket-list" target="_blank" rel="noopener noreferrer">
          <img 
            src="./../../img/bucket-list.jpg"
            alt="Bucket list made in React with TypeScript"
          />
        </Link></div>
      </article>
      <article className="row">
        <div className="col-12 col-lg-6 order-last order-lg-first">
          {" "}
          <Link to="https://github.com/jennikaelisson/Individual-assignment-3" target="_blank" rel="noopener noreferrer">
            <img
              src="./../../img/mars-rover-mini.jpg"
              alt="Website using NASA's APIs to display images taken by the rover Curiosity"
            />
          </Link>
        </div>
        <div className="col-12 col-lg-6">
          <h2>Mars Rover Explorer</h2>
          <p>
            Mars Rover Explorer is a dynamic web application developed using
            JavaScript and NASA's API. The application allows users to immerse
            themselves in captivating images captured by the Curiosity rover on
            Mars. Users have the flexibility to choose between Mars Sol Days or
            Earth Days for their search, and can further filter results based on
            various cameras, including navigation cameras and front hazard
            cameras.
            <br />
            <br />
            While fetching data from NASA's API, the application provides a
            visually engaging experience with a loading GIF and accompanying
            sound effects. This interactive and informative project showcases
            the synergy between JavaScript and external APIs, offering users a
            unique glimpse into the wonders of Mars through the lens of
            Curiosity.
          </p>
        </div>
      </article>
      <article className="row">
        <div className="col-12 col-lg-6">
          <h2>Retro Phone Book</h2>
          <p>
            Immerse yourself in the charm of the Retro Phone Book, a nostalgic
            application crafted with JavaScript. This delightful app invites
            users to create their own digital phonebook, complete with the
            ability to add, delete, and modify contacts at their convenience.
            The project was a testament to my JavaScript skills, offering a
            hands-on exploration of data manipulation and user interaction.
            <br />
           
            <br />
            One of the standout features is the option to delete individual
            contacts or wipe the entire phone book, providing users with a clean
            slate for new beginnings. The retro design, coupled with smooth
            animations, adds an extra layer of enjoyment to the user experience,
            making the act of managing contacts a delightful journey into the
            past with a modern twist.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          {" "}
          <Link to="https://github.com/jennikaelisson/Kunskapskontroll-2" target="_blank" rel="noopener noreferrer">
            <img
              src="./../../img/phone-book.jpg"
              alt="Phone book made in JavaScript"
            />
          </Link>
        </div>
      </article>
      <article className="row">
        <div className="col-12 col-lg-6 order-last order-lg-first">
          {" "}
          <Link to="https://github.com/jennikaelisson/FSU23D-assignment-01" target="_blank" rel="noopener noreferrer">
            <img src="./../../img/git-cafe-mini.jpg" alt="Website for café" />
          </Link>
        </div>
        <div className="col-12 col-lg-6">
          <h2>GIT Café</h2>
          <p>
            Welcome to the GIT Café, an online space curated for young
            professionals in the dynamic realms of IT and design. Immerse
            yourself in a sleek, modern, and refreshing web experience crafted
            entirely with HTML and CSS. This virtual café caters to the tastes
            and preferences of IT enthusiasts, offering a dark, contemporary
            design that mirrors the sophistication and style synonymous with the
            industry.
            <br />
            <br />
            The website, thoughtfully designed to be responsive across all
            devices, ensures a seamless and immersive experience for users
            whether they are on a desktop, laptop, tablet, or smartphone. The
            dark aesthetic adds a touch of elegance, while the modern layout and
            fresh content reflect the energy and creativity of the IT community.
          </p>
        </div>
      </article>
    </>
  );
};
