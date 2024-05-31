import Menu from "../../components/Menu"
import '../../Css/Juices.modules.css'


// import Menu from "../../components/Menu"
function Juices() {
    return (
        <>

            <Menu />

            {/* <div class="container">
                <h1>Order Your Favorite Juice!</h1>
                <form action="#">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />

                    <label for="address">Address:</label>
                    <textarea id="address" name="address" placeholder="Enter your delivery address" rows="4" required></textarea>

                    <label for="mobile">Mobile Number:</label>
                    <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" pattern="[0-9]{10}" required />

                    <label for="juice">Juice Name:</label>
                    <select id="juice" name="juice" required>
                        <option value="">-- Select Juice --</option>
                        <option value="orange">Orange</option>
                        <option value="mango">Mango</option>
                        <option value="pineapple">Pineapple</option>
                        <option value="mixed">Mixed Fruit</option>
                    </select>

                    <button type="submit">Order Now</button>
                </form>
            </div> */}
        </>
    )
}

export default Juices