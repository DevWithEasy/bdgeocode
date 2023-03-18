import upazillas from "../../../../data/v.1/upazillas";

export default function handler(req, res) {
    res.status(200).json({
        status : 200,
        success : true,
        data : upazillas
    })
}