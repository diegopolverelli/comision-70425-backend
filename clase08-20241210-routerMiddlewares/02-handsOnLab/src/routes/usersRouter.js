import {Router} from "express"

export const router=Router()

// /api/users

router.get("/", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"get a users...!!!"});
})
router.get("/:id", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`get user ${req.params.id}...!!!`});
})
router.post("/", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"post a users...!!!"});
})
router.put("/:id", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"put a users...!!!"});
})
router.delete("/:id", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"delete a users...!!!"});
})