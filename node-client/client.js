
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const PROTO_PATH = path.join(__dirname, "../user.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition).user;

const client = new proto.UserService(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

console.log("Mengirim request ke Go Server menggunakan Node.js...");

client.GetUserProfile({ userId: 1 }, (err, response) => {
    if (err) {
        console.error("Gagal mendapatkan data:", err.message);
        client.close();
        return;
    }

    console.log(
        `Respon dari Server -> Nama: ${response.name}, Email: ${response.email}, Phone: ${response.phone}`
    );

    client.close();
});
