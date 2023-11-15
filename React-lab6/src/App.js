import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[
        {
          id: 1,
          title: 'Ірис',
          img: 'images2.jpg',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Соняшник',
          img: 'images3.jpg',
          price: '99.99'
        },
        {
          id: 3,
          title: 'Троянда',
          img: '0RgfXAUiquvfnO5JfMvx.jpg',
          price: '70.00'
        },
        {
          id: 4,
          title: 'Тюльпан',
          img: 'images1.jpg',
          price: '45.50'
        }
      ]
    }
  }
  render(){
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
