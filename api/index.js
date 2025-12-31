import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());

//permitir todas orgens 
app.use(cors());

const POSSIBLE_LABELS = {
  cep: ["CEP", "Postal Code"],
  rua: ["Rua", "Address", "Av/Rua", "Rua/ Avenida", "Logradouro", "Endereço"],
  bairro: ["Bairro", "Neighborhood"],
  cidade: ["Cidade", "City", "cidade"],
  estado: ["Estado", "State"],
  complemento: ["Complemento", "Complement"]
};

const HOTELS_CSV =
  "A2501,A2502,A2503,HA1C8,HA1F2,HA0H2,H0768,HC1X6,HB858,HB727,H7202,H6665,58778,H9596,H5468,H9382,H9360," +
  "H9739,H9365,HB8N0,H9087,H9611,H5633,H9362,HB9K6,H5021,H5519,HB9K8,H5521," +
  "H9038,H5469,H8649,H7220,HC1D3,H5534,HC1X6,HB2Z9,HB445,H5181,H9190,H5672," +
  "H9564,HB2Z8,H9088,HB608,HB8P5,H5670,H6664,H5168,H9089,H6035,H5470,H7823," +
  "H9382,H9719,HB2Z6,H9956,H8273,H8664,H8637,HB609,HB5A2,H8279,HA487,HA8F7," +
  "HC0V8,HB305,H5528,HB5R1,H3736,HB304,HB2Z2,H6315,HA0G6,H8175,HB2Z7,HB301," +
  "H5541,HB307,HB309,HB306,HB308,HB300,H6969,HB1Z9,HB303,HB203,HB1Z6,HB2Z5," +
  "H8665,H8638,H3624,H3262,KPLATZ,LKDESIGN,H";

const HOTELS = HOTELS_CSV.split(",").map(h => h.trim()).filter(Boolean);

app.get("/possible-labels", (req, res) => {
  res.json({
    success: true,
    data: POSSIBLE_LABELS
  });
});


app.get("/hotels", (req, res) => {
  res.json({
    success: true,
    total: HOTELS.length,
    hotels: HOTELS
  });
});


export default app;
