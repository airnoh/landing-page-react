import { HeaderCard } from "../components/HeaderCard";

export const Section1 = () => {
  return (
    <div class="bg-dark welcome-overall">
      <div class="welcome-section ">
        <h1 class="text-center mb-3">Welcome to new app</h1>
        <hr class="w-25 m-auto bg-white mb-4" />

        <div class="d-lg-flex">
          <div class=" text-white our-mobile-container my-auto">
            <h5>OUr MOBILe APP Team</h5>
            <p class=" lorem2">
              App Scarcer pace is provided by cemplacemo <br /> that can be used
              for any sice.
            </p>
            <p class="lorem3">
              this is a responsive HTML CSS template designed <br /> for your
              mobile app papes. you can modify and <br /> use it to fit your
              needs.
            </p>
          </div>
          <div className="d-md-flex image-container">
            <HeaderCard
              img="https://www.axessystems.net.sa/images/team-img1.jpg"
              name="sandar Lynn"
              title="UI Designer"
            />
            <HeaderCard
              img="https://www.axessystems.net.sa/images/team-img2.jpg"
              name="Candy"
              title="UX Specialist"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
