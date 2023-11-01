import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaWhatsapp, FaTwitter, FaInstagram, FaHtml5, FaCss3 } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BandCarusole from '../BandCarusole/BandCarusole';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>  <ButtonGroup vertical>
            <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log In With Google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Log In with Github</Button>
        </ButtonGroup>
            <div className='mt-4'>
                <h5>Find In On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2' > <FaFacebook></FaFacebook>  Facrbook</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaInstagram></FaInstagram>  Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaTwitch></FaTwitch>  Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaWhatsapp></FaWhatsapp>  Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaHtml5></FaHtml5> HTML5</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaCss3></FaCss3> CSS3</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BandCarusole></BandCarusole>
            </div>
        </div>
    );
};

export default RightSideNav;