import {useState} from 'react'
import { Link } from 'react-router-dom';
import {MdMenu, MdClose} from 'react-icons/md'
import {Container, Logo, Nav, CircleMercury, ButtonMercury, CircleJupiter, CircleUranus, CircleNeptune, CircleSaturn, CircleMars, CircleEarth, CircleVenus, BtnMenuMobile, ButtonVenus, ButtonEarth, ButtonMars, ButtonJupiter, ButtonSaturn, ButtonUranus, ButtonNeptune } from './style'

const Navbar: React.FC = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const handleOpen = () => {
        setOpenMenu(!openMenu);
      }

    return(
        <Container>
                <Logo>The Planets</Logo>
                <Nav className={openMenu !== true ? '' : 'open'}>
                    <Link to={'/'}><ButtonMercury><CircleMercury></CircleMercury>Mercury</ButtonMercury></Link>
                    <Link to={'/venus'}><ButtonVenus><CircleVenus></CircleVenus>Venus</ButtonVenus></Link>
                    <Link to={'/earth'}><ButtonEarth><CircleEarth></CircleEarth>Earth</ButtonEarth></Link>
                    <Link to={'/mars'}><ButtonMars><CircleMars></CircleMars>Mars</ButtonMars></Link>
                    <Link to={'/jupiter'}><ButtonJupiter><CircleJupiter></CircleJupiter>Jupiter</ButtonJupiter></Link>
                    <Link to={'/saturn'}><ButtonSaturn><CircleSaturn></CircleSaturn>Saturn</ButtonSaturn></Link>
                    <Link to={'/uranus'}><ButtonUranus><CircleUranus></CircleUranus>Uranus</ButtonUranus></Link>
                    <Link to={'/neptune'}><ButtonNeptune> <CircleNeptune></CircleNeptune>Neptune</ButtonNeptune></Link>
                </Nav>
                <BtnMenuMobile onClick={handleOpen}>
                    {openMenu !== true ? <MdMenu size={30} color='#fff'/> : <MdClose size={30} color='#38384f' />}
                </BtnMenuMobile>
        </Container>
    );
}

export default Navbar