<script type="text/javascript">
    {{-- Success Message --}}
    @if (Session::has('success'))
    Swal.fire({
    icon: 'success',
    title: 'Done',
    text: '{{ Session::get("success") }}',
    confirmButtonColor: "#3a57e8"
    });
    @endif
    {{-- Error Message --}}
    @if (Session::has('errors'))
    Swal.fire({
    icon: 'error',
    title: 'Opps!!!',
    text: '{{ Session::get("error")->first }}'
    confirmButtonColor: "#3a57e8"
    });
    @endif
</script>