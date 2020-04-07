<template>
  <div class="products">
   <div class="container text-left">
       <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-6">
                    <h3>Products Page</h3>
                        
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src="/img/svg/products.svg" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <hr>
        
        <div class="crud text-left">
          <h1>Basic CRUD (create/read/update/delete) in Firebase and Vue</h1>
          <div class="form-group">
            <label for="product-name">Product Name</label>
            <input type="text" class="form-control" v-model="product.name" id="product-name" placeholder="Product Name">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" v-model="product.price" id="price" placeholder="Price">
          </div>
          <Button @click="saveData" class="btn btn-primary">Save Data</Button>
        </div>

        <hr>
        <br>
        <br>
        <h3>Product List</h3>
        <div class="table-responsive">
          <table class="table">
          <thead>
            <tr>
              
              <th scope="col">Nama Product</th>
              <th scope="col">Price</th>
              <th class="text-right" scope="col">Modify</th>        
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product,i) in products" :key="`${i}-${product.id}`">         
              <td>{{product.name}}</td>
              <td>{{product.price}}</td>
              <td class="text-right">
                <button class="btn btn-primary mr-2">Edit</button>
                <button class="btn btn-danger " @click="deleteProduct(product)">Delete</button>
              </td>    
            </tr>
          </tbody>
        </table>
      </div>
   </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {fb,db} from "../firebase"


export default {
  name: 'products',
  props: {
    msg: String
  },
  data() {
    return {
      products : [],
      product : {
          name : null,
          price : null
      }
    
    }
  },
  firestore() {
    return {
      products : db.collection('products')
    }
  },
  methods : {
    // eslint-disable-next-line no-unused-vars
    deleteProduct(product) {
      
       
       
       // eslint-disable-next-line no-undef
       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {

          this.$firestore.products.doc(product['.key']).delete();

          

        
        }
      })
    },
    // readData(){
    //    db.collection("products").get().then((querySnapshot) => {
    //       //this.products = querySnapshot;

    //       querySnapshot.forEach((doc) => {
    //           // doc.data() is never undefined for query doc snapshots
    //          this.products.push(doc);
              
    //       });
    //   });
    // },
    //function save Data
    saveData() {
      // db.collection("products").add(this.product)
      // .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      //     this.reset();
      //     this.readData();
      // })
      // .catch(function(error) {
      //     console.error("Error adding document: ", error);
      // });
        this.$firestore.products.add({
          name : this.product.name,
          price : this.product.price,
          timestamp: new Date()
        });

        this.product.name = null;
        this.product.price =null;
      
    },
    //end function save data

    //function reset input
    reset() {
      this.product = {
          name : null,
          price : null
      }
    }
    //end function reset input
  },
  //function read data product
  // created() {
  //      this.readData();
  // }
  //end function read data product
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
