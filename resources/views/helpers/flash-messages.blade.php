@if (session('status'))
    <div class="row">
        <div class="col-12">
            <div class="alert alert-success">
                <!-- Możliwość wyłączenia alertu -->
                <!-- <button class="close" data-dismiss="alert" aria-hidden="true">
                    &times;
                </button> -->
                {{ session('status') }}
            </div>
        </div>
    </div>
@endif