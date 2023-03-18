import upazillas from "../../../../data/v.1/upazillas";

export default function handler(req, res) {
    const data = upazillas.filter(upazilla=> upazilla.district_id === req.query.districtId)
    res.status(200).json({
        status : 200,
        success : true,
        data : data
    })
}