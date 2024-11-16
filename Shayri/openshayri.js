import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHillAvalanche } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, Pressable, Alert } from "react-native";
import { Image } from "react-native-svg";


export const OpenShayri = ({route}) => {

    const {shayri,color,item} = route.params;


        const [prev,setprev] = useState(0);

    const [plush,setplush] = useState(0);
    const [plush2,setplush2] = useState(0)
    const bgarr = [require('./img/img2.jpg'), require('./img/img1.jpg'), require('./img/img3.jpg'), require('./img/img4.jpg'), require('./img/img5.jpg'),
                   require('./img/img6.jpg'), require('./img/img7.jpg'), require('./img/img8.jpg'), require('./img/img9.jpg'), require('./img/img10.jpg'),
                   require('./img/img11.jpg'), require('./img/img12.jpg'), require('./img/img13.jpg'), require('./img/img14.jpg'), require('./img/img15.jpg'),
                   require('./img/img16.jpg'), require('./img/img17.jpg'), require('./img/img18.jpg'), require('./img/img19.jpg'), require('./img/img20.jpg'),
                   require('./img/img21.jpg'), require('./img/img22.jpg'), require('./img/img23.jpg'), require('./img/img24.jpg'), require('./img/img25.jpg'),   
                   require('./img/img26.jpg'), require('./img/img27.jpg'), require('./img/img28.jpg'), require('./img/img29.jpg'), require('./img/img30.jpg'),
                   require('./img/img31.jpg')
                  ];
    const txtcolor=["black","green","red","blue","grey","yellow","magenta","purpal","pink","white","skyblue","khaki"];

    const itemarr =['Alone', 'Angry', 'anniversary', 'Attitude', 'Awesome', 'Akward', 'Beard', 'Beautiful', 'Best', 'Bike', 'Birthday', 'Break Up', 'Brother', 'Busy', 
    'Cheat', 'Chaildhood', 'Clever', 'College', 'Cool', 'Creative', 'Cute', 'Dance', 'Emotional', 'Exam', 'Facebook', 'Family', "Father's Day", 'Flirt',
    'Food', 'Forgiveness', 'Friends', 'Funny', 'God', 'Good Morning', 'Good Night', 'Gym', 'Happiness', 'Hate You', 'Heart Touching', 'Heartbreak', 'Hindi',
    'Home', 'Hot', 'Hurt', 'Husband', 'Inspiritional', 'Insult', 'jealous', 'Kids', 'Kiss', 'Life', 'Lonely', 'love', 'Marriage', 'Men', 'Miss You', 'Monday',
    "Mother's Day", 'Motivational', 'Moving On', 'Music', 'Naughty', 'Pain', 'Parents', 'Party', 'Pets', 'Punjabi', 'Quotes', 'Rain', 'Relationship', 'Romantic',
    'Sad', 'School', 'Selfie', 'Selfish', 'Shoping', 'Sick', 'Single', 'Sister', 'Smart', 'Smile', 'Sorry', 'Success', 'Summer', 'Sunday', 'Sweet', 'Tears',
    'Technology', 'Thank You', 'Though', 'Tired', 'True', 'Trust', 'Unique', 'Weekend', 'Whatsapp', 'Wife', 'Winter', 'Wise', 'Women', 'Work']

    const ARRAY=[
            [ //alone    
                "The Pepole, and the pepole alone, are the motive force in the making of world history.",
                "It's time to end the cruel slaughter of whales and leave these magnificent creatures alone.",
                "The soul that sees beauty may sometimes walk alone.",
                "I restore myself when I'm alone.",
                "They are all gone into the world of light, and I alone sit lingering here."
            ],
            [ //angry
                "Always write angry letters to your enemies. Never mail them.",
                "Where there is anger, there is always pain underneath.",
                "A fool gives full vent to his anger, but a wise man keeps himself under control.",
                "Not the fastest horse can catch a word spoken in anger.",
                "Never do anything when you are in a temper, for you will do everything wrong."
            ],
            [ //anniversary
                "Blessings and your teachings in making my life meaningful.Thank you for being my life.",
                "I am so lucky to have you as my husband and this is my best day in my life. Happy anniversary",
                "A happy wife is a happy life.",
                "True love isn't love at first sight but love at every sight.Happy Anniversary.",
                "To the beautiful couple on this land, May your anniversary be Happy and Grand. Happy Anniversary"
            ],
            [//attitude
                "For success, attitude is as much important as ability.",
                "Wonders why people keep doing the same old things, but yet expect a different outcome!!",
                "Attitude is like underwear - don't show it just wore it.",
                "The road to success is always under construction.",
                "Work until you don't have to, introduce yourself."
            ],
            [//awesome
                "Sometimes all you need is love. Lol, just kidding, you need money. :').",
                "I really need a day in between Saturday and Sunday.",
                "Was going to rob a bank today but the pen was chained to the desk.",
                "The only normal people you know are the ones you don't know very well.",
                "Eight letters, three words, one regret. I miss you."
            ],
            [//akward
                "That awkward moment  when you accidentally call your boss 'Honey'.",
                "That awkward moment  when you want to buy something, check the price and sadly, leave it there.",
                "That awkward moment  when a teacher catches you texting.",
                "The awkward moment  when you have crunchy food in a room full of silent people.",
                "The awkward moment  when you think a customer is a salesperson.",
            ],
            [//beard
                "He who sacrifices his beard for a woman deserves neither.",
                "I beleive in beards",
                "You call it facial hair, I call it awesomeness escaping through my face.",
                "Men don't cry, they water their beard !",
                "There's a name for people without beards... WOMEN!",
            ],
            [//beautiful
                "What lies behind us, and what lies before us are tiny matters compared to what lies within us.",
                "If you are reading this, you are beautiful. Smile & let the world show it :)",
                "I don't like standard beauty - there is no beauty without strangeness.",
                "By plucking her petals, you do not gather the beauty of the flower.",
                "Tell them dear, that if eyes were made for seeing, Then beauty is its own excuse for being."
            ],
            [//best
                "I always advise people never to give advice.",
                "GIRL: Describe me in 1 word. —- BOY: Mine ;)",
                "I am not virgin, My life f**ks me everyday.",
                "Attitude is a little thing that makes a big difference.",
                "Wise men don't need advice. Fools won't take it."
            ],
            [//bike
                "I don't ride a bike to add days to my life. I ride a bike to add life to my days.",
                "Run the race of your life at your own pace.",
                "Two wheels move the soul.",
                "Don't count laps. Make every lap count.",
                "It's not a race. It's a journey enjoy the moment.",
            ],
        ]

    function increment()
    {
        if(plush == bgarr.length-1)
        {
            setplush(0)
        }
        else
        {
            setplush(plush+1);
        }
    }

    function increment2()
    {
        if(plush2 == txtcolor.length)
        {
            setplush2(0)
        }
        else
        {
            setplush2(plush2+1);
        }
    }

    function prevfun(x)
    {
        if(x==0)
        {
            if(prev==ARRAY[shayri].length)
                {
                    setprev(0);
                }
                if(prev<ARRAY[shayri].length) 
                    setprev(prev+1);
        }
        if(x==1)
        {
            if(prev==0)
                setprev(ARRAY[shayri].length)
            if(prev>ARRAY[shayri].length-ARRAY[shayri].length)
                setprev(prev-1);
        }          
    }
    return(
        <>
        <View style={style.main}>
            <View style={[{backgroundColor:"white"},style.peta]}>
                <Text style={style.head}>{item}</Text>
                <Pressable style={style.bgperent} onPress={()=>{increment()}}>
                    <ImageBackground style={style.bg} source={bgarr[plush]} resizeMode="stretch">
                        <Text style={[{color:txtcolor[plush2-1]},style.txt]}> {ARRAY[shayri][prev]} </Text>
                    </ImageBackground>
                </Pressable>
                <View style={style.footer}>
                    <Pressable style={style.colorbuton} onPress={()=>{increment2()}} >
                        <Text style={[{color:txtcolor[plush2]},style.color]}>color</Text>
                    </Pressable>
                    <View style={style.next}>
                        <Pressable style={style.leftbtn} onPress={()=>{prevfun(1)}} >
                            <Text style={style.prevtxt}>Prev</Text>
                        </Pressable>
                        <Pressable style={style.leftbtn} onPress={()=>{prevfun(0)}} >
                            <Text style={style.prevtxt}>Next</Text>
                        </Pressable>
                    </View>
                    
                </View>
            </View>
        </View>
        </>
    )
}
const style = StyleSheet.create({
    main:{
        height:"100%",
        backgroundColor:"black",
        justifyContent:"center",
    },
    peta:{
        height:"65%",
        width:"90%",
        alignSelf:"center",
        borderRadius:15,
        justifyContent:"space-between",
    },
    head:{
        height:"12.5%",
        fontSize:30,
        textAlignVertical:"center",
        textAlign:"center",
        color:"black",
        fontWeight:"900",
    },
    bgperent:{
        height:"75%",
    },
    bg:{
        height:"100%",
        backgroundColor:"white",
    },
    txt:{
        height:"100%",
        width:"99%",
        fontSize:25,
        textAlign:"center",
        padding:20,
        textAlignVertical:"center",
        alignSelf:"center",
        fontWeight:"900",
    },
    footer:{
        height:"12.5%",
        fontSize:30,
        textAlignVertical:"center",
        textAlign:"center",
        color:"black",
        fontWeight:"900",
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    colorbuton:{
        height:"60%",
        width:"15%",
        borderColor:"black",
        borderWidth:1,
        alignSelf:"center",
        borderRadius:10
    },
    color:{
        height:"100%",
        fontSize:20,
        textAlign:"center",
        textAlignVertical:"center",
    },
    next:{
        height:"60%",
        width:"30%",
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    leftbtn:{
        height:"100%",
        width:"40%",
        borderWidth:1,
    },
    prevtxt:{
        height:"100%",
        width:"100%",
        fontSize:20,
        textAlignVertical:"center",
        textAlign:"center",
        color:"black"
    }
})