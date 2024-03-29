import auth from "../config/firebase-config";

export const VerifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    try {
        const decodeValue = await auth.verifyIdToken(token);
        if(decodeValue){
            req.user = decodeValue;
            return next();
        }
    }catch(e){
        return res.json({ message : "Internal Error"});
    }
}