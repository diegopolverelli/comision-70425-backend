const http=require("http")
const url=require("url")

const PORT=3000

const server=http.createServer((req, res)=>{    // req=request  y res=response   
    // console.log(req)

    const urlParse=url.parse(req.url, true)
    console.log(urlParse)

    console.log(req.url)
    if(req.url==="/heroes"){

        let heroes=[
            {
                id:1,
                name:'Spider-Man',
                alias:'Peter Parker',
                team:'Avengers',
                publisher:'Marvel',
            },
            {
                id:2,
                name:'Superman',
                alias:'Clark Kent',
                team:'Justice League',
                publisher:'DC',
            },
            {
                id:3,
                name:'Iron Man',
                alias:'Tony Stark',
                team:'Avengers',
                publisher:'Marvel',
            },
            {
                id:4,
                name:'Wonder Woman',
                alias:'Diana Prince',
                team:'Justice League',
                publisher:'DC',
            },
            {
                id:5,
                name:'Black Widow',
                alias:'Natasha Romanoff',
                team:'Avengers',
                publisher:'Marvel',
            },
            {
                id:6,
                name:'Batman',
                alias:'Bruce Wayne',
                team:'Justice League',
                publisher:'DC',
            },
            {
                id:7,
                name:'Aquaman',
                alias:'Arthur Curry',
                team:'Justice League',
                publisher:'DC',
            },
            {
                id:8,
                name:'Captain America',
                alias:'Steve Rogers',
                team:'Avengers',
                publisher:'Marvel',
            },
            {
                id:9,
                name:'Flash',
                alias:'Barry Allen',
                team:'Justice League',
                publisher:'DC',
            },
            {
                id:10,
                name:'Black Panther',
                alias:'TChalla',
                team:'Avengers',
                publisher:'Marvel',
            },
            {
                id:11,
                name:'Green Lantern',
                alias:'Hal Jordan',
                team:'Justice League',
                publisher:'DC',
            },
            {
                id:12,
                name:'Thor',
                alias:'Thor Odinson',
                team:'Avengers',
                publisher:'Marvel',
            },
            {
                id:13,
                name:'Batwoman',
                alias:'Kate Kane',
                team:'Bat Family',
                publisher:'DC',
            },
            {
                id:14,
                name:'Hulk',
                alias:'Bruce Banner',
                team:'Avengers',
                publisher:'Marvel',
            },
            {
                id:15,
                name:'Zatanna',
                alias:'Zatanna Zatara',
                team:'Justice League Dark',
                publisher:'DC',
            },
            {
                id:16,
                name:'Doctor Strange',
                alias:'Stephen Strange',
                team:'Defenders',
                publisher:'Marvel',
            },
            {
                id:17,
                name:'Green Arrow',
                alias:'Oliver Queen',
                team:'Justice League',
                publisher:'DC',
            },
            {
                id:18,
                name:'Scarlet Witch',
                alias:'Wanda Maximoff',
                team:'Avengers',
                publisher:'Marvel',
            },
            {
                id:19,
                name:'Martian Manhunter',
                alias:'Jonn Jonzz',
                team:'Justice League',
                publisher:'DC',
            },
            {
                id:20,
                name:'Deadpool',
                alias:'Wade Wilson',
                team:'None',
                publisher:'Marvel',
            },
        ]

        res.setHeader("Content-Type", "application/json")
        return res.end(JSON.stringify(heroes, null, 5))

    }

    if(req.url==="/contacto"){
        res.setHeader("Content-Type", "text/html; charset=utf-8")
        return res.end(`Pagina de contacto`)

    }

    if(req.url==="/"){
        res.setHeader("Content-Type", "text/html; charset=utf-8")
        return res.end(`Server desarrollado con el módulo http de node...!!!`)
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8")
    return res.end(`error 404 | page not found`)
})

server.listen(PORT, ()=>{
    console.log(`Server online!`)
})