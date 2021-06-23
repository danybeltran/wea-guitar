export default function About() {
  return (
    <div className="shadow py-10 md:py-20 px-4 lg:px-40  bg-white space-y-4">
      <h2 className="text-4xl text-center font-semibold">We are WeaGuitar!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        adipisci alias exercitationem voluptatum excepturi accusamus quaerat
        impedit in voluptate eaque nesciunt ad cum eius vero sunt maxime iste
        commodi incidunt?
      </p>
      <div className="w-full">
        <img
          className="rounded mx-auto w-full md:w-1/2"
          src="https://guitar.com/wp-content/uploads/2020/03/person-playing-classical-guitar-at-home@1400x1050.jpg"
          alt=""
        />
        <p className="w-full text-center">Some random person playing guitar</p>
      </div>
    </div>
  );
}
