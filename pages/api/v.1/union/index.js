import unions from "../../../../data/v.1/unions";

export default function handler(req, res) {
    res.status(200).json({
        status : 200,
        success : true,
        data : unions
    })
}