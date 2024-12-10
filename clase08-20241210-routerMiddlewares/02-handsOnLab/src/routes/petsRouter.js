import {Router} from "express"

export const router=Router()

router.get("/", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`get a pets`});
})

router.get("/:id", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`get a pet ${req.params.id}`});
})

router.post("/", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`post a pets`});
})

router.put("/:id", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`put a pets`});
})

router.delete("/:id", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`delete a pets`});
})

