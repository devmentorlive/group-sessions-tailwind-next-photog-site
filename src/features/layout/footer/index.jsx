export default function Footer({}) {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="flex justify-center">
        <div>
          <div className="text-5xl font-serif text-center p-8">Tati Frank</div>
          <div className="md:flex md:space-x-12 text-lg px-12">
            <div>
              <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Offerings</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>About</li>
                <li>Favorites</li>
                <li>Journal</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>For Photographers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
