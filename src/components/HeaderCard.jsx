export const HeaderCard = (props) => {
  return (
      <div class="m-2 position-relative moon1">
        <div class="image1">
          <img src={props.img} alt = " " />
        </div>
        <div class="position-absolute lorem-contain">
          <p class="text-center"> {props.name}</p>
          <h6 class="text-center text-dark"> {props.title}</h6>
        </div>
      </div>
  );
};
