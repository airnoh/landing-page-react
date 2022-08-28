import { Button } from "./Button";
export const FooterCard = () => {
  return (
    <div class="col-md bg-white p-5  text-center middle">
      <h3 class="text-info font">$60</h3>
      <h5 class="text-primary mt-4">Starter</h5>
      <p class="text-secondary">40 user</p>
      <p class="text-secondary">10GB per User</p>
      <p class="text-secondary">Unlimited Support</p>
      <p class="text-secondary">1 Year License</p>
      <Button
      btnStyle = 'btn btn-info button text-white w-75 h-15'
      text = 'Register Now'
      />
    </div>
  );
};
