export default{
    name:'origin-port',
    props:['placeholder','label','states','col','value'],
    data () {
        return {
            options:[],
            list: [],
            loading: false,
        }
    },
    methods: {
        remoteMethod(query) {
          if (query !== '') {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.options = this.list.filter(item => {
                return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
              });
            }, 200);
          } else {
            this.options4 = [];
          }
        }
    },
    mounted () {
        this.list = this.states.map(item => {
          return { value: item, label: item };
        });
      }
}