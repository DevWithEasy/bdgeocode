import unions from "../../../../data/v.1/unions";

export default function handler(req, res) {
    const data = unions.filter(union=> union.upazilla_id === req.query.upazillaId)
    res.status(200).json({
        status : 200,
        success : true,
        data : data
    })
}