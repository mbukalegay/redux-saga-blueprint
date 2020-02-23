interface IPlayerProps{

    PlayerId : Number;
    FirstName : string;
    LastName: string;
    PictureLink : string;
    Avatar: string;
    Position: string;
    JerseyNumber: Number;
    Height: string;
    Hobbies: string;
    Ambitions: string;

}

class NFIRepo{
    
 getPlayer = () : IPlayerProps[] => {
        let players : IPlayerProps[];
        players = [
            {
                PlayerId : 1,
                FirstName : "Bordwin",
                LastName : "Anu",
                PictureLink : "http://www.nfikumba.com/images/teams/thumbs/Bordwin_Anu.jpg",
                Avatar: "G",
                Position: "Goalkeeper",
                JerseyNumber: 1,
                Height: "1,75",
                Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            },
            {
                PlayerId : 2,
                FirstName : "Mohamadou",
                LastName : "Sani",
                PictureLink :"http://www.nfikumba.com/images/teams/thumbs/Mohamadou_Sani.jpg",
                Avatar: "A",
                Position: "Attacker",
                JerseyNumber: 9,
                Height: "1,77",
                Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            }
        ]

        return players;
    }

    getAllPlayers = () : Promise<IPlayerProps[]> => {
        return new Promise<IPlayerProps[]>((resolve,reject) => {
            let players : IPlayerProps[];
            players = [
                {
                    PlayerId : 1,
                    FirstName : "Bordwin",
                    LastName : "Anu",
                    PictureLink : "http://www.nfikumba.com/images/teams/thumbs/Bordwin_Anu.jpg",
                    Avatar: "G",
                    Position: "Goalkeeper",
                    JerseyNumber: 1,
                    Height: "1,75",
                    Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                    Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                },
                {
                    PlayerId : 2,
                    FirstName : "Mohamadou",
                    LastName : "Sani",
                    PictureLink :"http://www.nfikumba.com/images/teams/thumbs/Mohamadou_Sani.jpg",
                    Avatar: "A",
                    Position: "Attacker",
                    JerseyNumber: 9,
                    Height: "1,77",
                    Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                    Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }
            ];
            resolve(players);

            }
        );
    }

    getAnotherPromise = () : Promise<IPlayerProps[]> => {

        return new Promise<IPlayerProps[]>((resolve, reject) => {
            const res  : IPlayerProps[] = [];
            let players : IPlayerProps[];
            players = [
                {
                    PlayerId : 1,
                    FirstName : "Bordwin",
                    LastName : "Anu",
                    PictureLink : "http://www.nfikumba.com/images/teams/thumbs/Bordwin_Anu.jpg",
                    Avatar: "G",
                    Position: "Goalkeeper",
                    JerseyNumber: 1,
                    Height: "1,75",
                    Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                    Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                },
                {
                    PlayerId : 2,
                    FirstName : "Mohamadou",
                    LastName : "Sani",
                    PictureLink :"http://www.nfikumba.com/images/teams/thumbs/Mohamadou_Sani.jpg",
                    Avatar: "A",
                    Position: "Attacker",
                    JerseyNumber: 9,
                    Height: "1,77",
                    Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                    Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }
                ,
                {
                    PlayerId : 3,
                    FirstName : "Godwill",
                    LastName : "Mokube",
                    PictureLink :"http://www.nfikumba.com/images/teams/thumbs/Godwill_Mokube.jpg",
                    Avatar: "A",
                    Position: "Attacker",
                    JerseyNumber: 14,
                    Height: "1,85",
                    Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                    Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }
                ,
                {
                    PlayerId : 4,
                    FirstName : "Ambalo",
                    LastName : "Emberikia",
                    PictureLink :"http://www.nfikumba.com/images/teams/thumbs/Ambalo_Emberikia.jpg",
                    Avatar: "M",
                    Position: "Miedfielder",
                    JerseyNumber: 8,
                    Height: "1,79",
                    Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                    Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }
                ,
                {
                    PlayerId : 5,
                    FirstName : "Amingwa",
                    LastName : "Tanjong",
                    PictureLink :"http://www.nfikumba.com/images/teams/thumbs/Amingwa_Tanjong.jpg",
                    Avatar: "D",
                    Position: "Defender",
                    JerseyNumber: 5,
                    Height: "1,73",
                    Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                    Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }
                ,
                {
                    PlayerId : 6,
                    FirstName : "Ebot",
                    LastName : "Eyere",
                    PictureLink :"http://www.nfikumba.com/images/teams/thumbs/Ebot_Eyere.jpg",
                    Avatar: "D",
                    Position: "Dedfender",
                    JerseyNumber: 12,
                    Height: "1,91",
                    Hobbies : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
                    Ambitions : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }

            ];
            if(res != null){
                return resolve(players);
            }
            else{
                return reject("Upps");
            }
        })
    }

 
    getPlayerById = (id:string)  : IPlayerProps => {
        let player : IPlayerProps ;
        player = {PlayerId : 1, FirstName : "", LastName :"", PictureLink:"", Avatar : "", Position : "", JerseyNumber: 1, Height : "", Hobbies:"", Ambitions:""  };
        return  player;
    }

}

export default NFIRepo;