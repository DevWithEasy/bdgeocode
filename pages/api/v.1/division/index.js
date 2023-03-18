import divisions from "../../../../data/v.1/divisions";

export default function handler(req, res) {
    res.status(200).json({
        status : 200,
        success : true,
        data : divisions
    })
}
  