import {Request, Response} from 'express';

export const getUsers = (req: Request, res: Response ) => {
    try {
        res.json({
            ok: true,
            msg: 'getUsers'
        });
    } catch(err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}

export const getUser = (req: Request, res: Response ) => {
    try {
        const {id} = req.params;
        res.json({
            ok: true,
            msg: 'getUser',
            id
        });
    } catch(err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}

export const postUser = (req: Request, res: Response ) => {
    try {
        const {body} = req;
        
        console.log(body);
        
        res.json({
            ok: true,
            msg: 'postUser',
            body
        });
    } catch(err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}

export const puttUser = (req: Request, res: Response ) => {
    try {
        const {body} = req;
        const {id} = req.params;
        res.json({
            ok: true,
            msg: 'putUser',
            body,
            id
        });
    } catch(err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}

export const deletetUser = (req: Request, res: Response ) => {
    try {
        const {id} = req.params;
        res.json({
            ok: true,
            msg: 'deleteUser',
            id
        });
    } catch(err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}
