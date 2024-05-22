<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="container">
        <div class="alert bg-success my-3">
          <h4 class="text-center" style="color: red">book Create</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">bookName:</label>
              <input type="text" class="form-control" v-model="bookName" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">authorName:</label>
              <input type="text" class="form-control" v-model="authorName" />
            </div>
            <div class="field my-3">
              <!-- <label for="" class="form-label">mobno:</label>
                  <input type="text" class="form-control" v-model="mobno" /> -->
              <div class="field my-3">
                <label for="" class="form-label">price:</label>
                <input type="text" class="form-control" v-model="price" />
              </div>
              <div class="field my-3">
                <label for="" class="form-label">Select Image:</label>
                <input type="file" class="form-control" ref="file" />
              </div>
            </div>
            <input
              type="submit"
              value="book Create"
              class="btn btn-info my-3 w-100"
              @click="bookCreate()"
            />

            <input
              type="submit"
              value="All book"
              class="btn btn-info my-3 w-100"
              @click="allbook()"
            />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import router from "@/routes";
import axios from "axios";

// import axios from "axios";
// import router from "@/router";

export default {
  name: "CreateBook",
  data() {
    return {
      file: "",
      price: "",
      authorName: "",
      bookName: "",
    };
  },
  methods: {
    async bookCreate() {
      try {
        var header = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        let data = new FormData();
        data.append("bookName", this.bookName),
          data.append("authorName", this.authorName),
          data.append("price", this.price),
          data.append("file", this.$refs.file.files[0]);

        let result = await axios({
          method: "post",
          url: "http://localhost:3000/book/create",
          data: data,
          header,
        });
        console.log(result, "message");
        // if (result.data.success) {
        //   // router.push({ path: "./userList" });
        //   router.push({ name: "bookList" });
        // }
      } catch (err) {
        console.log(err);
      }
    },
    async allbook() {
      let result = await axios({
        method: "get",
        url: "http://localhost:3000/book/list",
      });
      router.push({ path: "bookList" });
      console.log(result, "book");
    },
  },
};
</script>
