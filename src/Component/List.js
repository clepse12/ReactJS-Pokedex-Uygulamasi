import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./List.css"

class List extends Component {
    state = {
        filterText: ''
    }

    searchBox = (e) => {
        this.setState({
            filterText: e.target.value
        })

    }
    messages = () => {
        alert("Merhaba ! Lütfen Poke Topunun Yanına Pokemon Adını Gir !!")
    }


    render() {

        const FilteredProps = this.props.pokemon.filter(
            contact =>
                contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
        );
        return (


            <div>

                <div className={"search"}>
                    <input name={"search"} id={"search-box"} onChange={this.searchBox} placeholder={"Pokemon Ara..."}/>
                    <button onClick={this.messages}><img src={"favicon.ico"} className={"image"} alt=".."/></button>


                </div>

                <br/><br/><br/>
                {FilteredProps.map(sonuc => (

                    <div key={sonuc.order} className={"OutsiteCard"}>
                        <div className="innerCard" style={{
                            "backgroundImage": "url(" +
                                (() => {
                                    switch (sonuc.types[0].type['name']) {
                                        case "bug":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/0/05/Type_Background_Bug.png/revision/latest?cb=20171026003543";
                                        case "dark":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/f/f5/Type_Background_Dark.png/revision/latest?cb=20171026003554";
                                        case "dragon":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/2/28/Type_Background_Dragon.png/revision/latest?cb=20171026003601";
                                        case "electric":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/6/6c/Type_Background_Electric.png/revision/latest?cb=20171026003611";
                                        case "fairy":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/1/19/Type_Background_Fairy.png/revision/latest?cb=20171026003635";
                                        case "fighting":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/1/17/Type_Background_Fighting.png/revision/latest?cb=20171026003644";
                                        case "fire":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/6/64/Type_Background_Fire.png/revision/latest?cb=20171026003653";
                                        case "flying":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/6/65/Type_Background_Flying.png/revision/latest?cb=20171026004151";
                                        case "ghost":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/4/44/Type_Background_Ghost.png/revision/latest?cb=20171026003713";
                                        case "grass":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/9/92/Type_Background_Grass.png/revision/latest?cb=20171026003722";
                                        case "ground":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/a/a3/Type_Background_Ground.png/revision/latest?cb=20171026003731";
                                        case "ice":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/8/85/Type_Background_Ice.png/revision/latest?cb=20171026003739";
                                        case "poison":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/d/db/Type_Background_Poison.png/revision/latest?cb=20171026003759";
                                        case "psychic":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/f/f8/Type_Background_Psychic.png/revision/latest?cb=20171026003814";
                                        case "rock":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/5/5d/Type_Background_Rock.png/revision/latest?cb=20171026003823";
                                        case "steel":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/3/30/Type_Background_Steel.png/revision/latest?cb=20171026003833";
                                        case "water":
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/d/d2/Type_Background_Water.png/revision/latest?cb=20171026003849";
                                        default:
                                            return "https://vignette.wikia.nocookie.net/pokemongo/images/f/f6/Type_Background_Normal.png/revision/latest?cb=20171026003751";


                                    }
                                })()


                                + ")"
                        }}>


                            <div className="FrontCard">
                                <img src={sonuc.sprites['front_default']} style={{"width": "150px", "height": "150px"}}
                                     alt="Resim"/>
                                <img
                                    src={(() => {
                                        switch (sonuc.types[0].type['name']) {
                                            case "bug":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/8/88/Icon_Bug.png/revision/latest?cb=20171219195822";
                                            case "dark":
                                                return "#https://vignette.wikia.nocookie.net/pokemongo/images/e/e9/Icon_Dark.png/revision/latest?cb=20171219195823";
                                            case "dragon":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/d/d4/Icon_Dragon.png/revision/latest?cb=20171219195823";
                                            case "electric":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/1/1c/Icon_Electric.png/revision/latest?cb=20171219195824";
                                            case "fairy":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/7/7f/Icon_Fairy.png/revision/latest?cb=20171219195824";
                                            case "fighting":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/f/f0/Icon_Fighting.png/revision/latest?cb=20171219195825";
                                            case "fire":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/0/0a/Icon_Fire.png/revision/latest?cb=20171219195825";
                                            case "flying":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/b/b0/Icon_Flying.png/revision/latest?cb=20171219195826";
                                            case "ghost":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/7/7d/Icon_Ghost.png/revision/latest?cb=20171219195826";
                                            case "grass":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/0/0a/Icon_Grass.png/revision/latest?cb=20171219195826";
                                            case "ground":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/7/71/Icon_Ground.png/revision/latest?cb=20171219195827";
                                            case "ice":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/5/52/Icon_Ice.png/revision/latest?cb=20171219195828";
                                            case "poison":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/2/26/Icon_Poison.png/revision/latest?cb=20171219195828";
                                            case "psychic":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/c/ce/Icon_Psychic.png/revision/latest?cb=20171219195829";
                                            case "rock":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/5/57/Icon_Rock.png/revision/latest?cb=20171219195830";
                                            case "steel":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/3/38/Icon_Steel.png/revision/latest?cb=20171219195830";
                                            case "water":
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/6/65/Icon_Water.png/revision/latest?cb=20171219195830";
                                            default:
                                                return "https://vignette.wikia.nocookie.net/pokemongo/images/4/43/Icon_Normal.png/revision/latest?cb=20171219195828";


                                        }
                                    })()}
                                    alt="Resim" className={"Type"} style={{"width": "50px", "height": "50px"}}/>
                                <p>{sonuc.name.toUpperCase()}</p>
                                <strong>Type : {sonuc.types[0].type['name']}</strong>
                            </div>
                            <div className="BackCard">

                                <img src={sonuc.sprites['back_default']} style={{"width": "150px", "height": "150px"}} alt=""/>
                                <p className={"order"}>#{sonuc.order}</p>

                            </div>

                        </div>
                    </div>
                ))}


            </div>
        );
    }
}

List.propTypes = {
    pokemon: PropTypes.array.isRequired
};

export default List;