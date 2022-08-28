import { BlackCard } from "./BlackCard";

export const Section3 = () => {
  return (
    <div class="bg-dark ">
      <div class="container">
        <div class="text-white text-center p-4 ">
          <h2>APP Sceernshots</h2>
          <h5 class="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet. <br /> Impedit sint dolorum repudcto.
          </h5>
        </div>
      </div>
      <div class="container">
      <div class="row p-4">
        <BlackCard
        img= 'https://www.axessystems.net.sa/images/screenshot-img1.jpg'/>
        <BlackCard
        img = 'https://www.axessystems.net.sa/images/screenshot-img2.jpg'/>
        <BlackCard
        img = 'https://www.axessystems.net.sa/images/screenshot-img3.jpg'/>
        <BlackCard
        img = 'https://www.axessystems.net.sa/images/screenshot-img4.jpg'/>
      </div>
      </div>
    </div>
  );
};
