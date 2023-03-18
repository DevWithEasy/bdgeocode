import districts from "../../../../data/v.1/districts";

export default function handler(req, res) {
    res.status(200).json({
        status : 200,
        success : true,
        data : districts
    })
}
  