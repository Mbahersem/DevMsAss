import { useEffect } from "react";
import { useState } from "react";

export default function ImageComponent({user}) {
    const [image, setImage] = useState(null);
    console.log(user.email);

    useEffect(() => {
        const fetchImage = async () => {
            if(user.googleAcc) {
                try {
                    console.log(user.img);
                    const response = await fetch(user.img);
                    const blob = await response.blob();
                    setImage(URL.createObjectURL(blob));
                } catch(err) {
                    console.log(err);
                }
            } else {
                setImage(user.img);
            }
        }

        fetchImage();
    }, []);

    return (
        <div>
            {image && <img src={image} alt="Profile" />}
        </div>
    );
}