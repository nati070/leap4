const dals = require("../dals/urls");

const URL_DOMAIN_NAME = "www.leap4-test.com";
const EMPTY_LIST = 0;

const handleCreateMapUrl = async (req, res) => {
  //assuming that we not need to validate the json
  const data = req.body;
  try {
    const resposeDB = await dals.findURL(data["url"]);
    if (resposeDB.length == EMPTY_LIST) {
      const newUrl =  await dals.setURL(data["url"]);
      return res
        .status(201)
        .json({ msg: "url map created", url: newUrl["url"] , 'url-map' : (URL_DOMAIN_NAME + '/' +newUrl['id']) , 'id' : newUrl['id'] });
    }
    return res.status(409).json({ msg: "already exist" });
  } catch (err) {
    console.error("problem with DB");
    return res.status(500).json({ msg: "internal server error" });
  }
};

const handleMapUrl = async (req, res) => {
  //assuming that we not need to validate the json
  const data = req.body;
  try {
    const resposeDB = await dals.findById(data["id"]);
    if (!resposeDB) {
      return res.status(404).json({ msg: "not found" });
    }
    return res.status(200).json( {url : resposeDB['url']});
  } catch (err) {
    console.error("problem with DB");
    return res.status(500).json({ msg: "internal server error" });
  }
};

const handleGetAllUrls = async (req, res) => {
  try {
    const resposeData = await dals.getAllUrls();
    return res.status(200).json({ data: resposeData });
  } catch {
    console.error("problem with DB");
    return res.status(500).json({ msg: "internal server error" });
  }
};

module.exports = { handleCreateMapUrl, handleMapUrl, handleGetAllUrls };
