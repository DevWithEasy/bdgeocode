import districts from "../../../../data/v.1/districts";

export default function handler(req, res) {
    const data = districts.filter(district=> district.division_id === req.query.divisionId)
    console.log(req.query.divisionId);
    res.status(200).json({
        status : 200,
        success : true,
        data : data
    })
}