import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="bg-gray-200">
        <div className="flex justify-center">
          <div>
            <div className="text-5xl font-serif">Tati Frank</div>
            <div className="flex space-x-10">
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
    </>
  );
}
