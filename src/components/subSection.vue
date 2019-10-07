<template>
  <div class="privilege">
	  <div class="py-2 backlook">
	  <div class="shadow p-3 mb-1 mt-3 bg-dark rounded">


		<!-- Introduction content -->

          	<div class="row">
			<div class="col-md-6">
			<div class="grid text-white intro">Introducing an exclusive loyalty program that pays you back!</div>

		<!-- Option for Know More and Already a member -->

                <div class="d-flex pt-4">
                <button type="button" class="btn btn-light ml-5 mb-2">Know More</button>
                <div class="text pt-1 mx-3 text-white member">ALREADY A MEMBER?</div>
                </div>
               </div>

		<!-- PVR Logo and Privilege Text -->
				<div class="col-md-6 col-xs-12">
                    	<div class="logo">PVR</div>

				<div class="txt text-white"><em>Privilege</em></div>
			</div>

        </div>


  </div>
<div class= "comment">
	<font-awesome-icon :icon="['fas', 'comment']" class="fa-2x text-warning comment" />
	</div>


</div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.privilege {
	position: relative;
}
.backlook {
	margin: 0 255px;
}

.intro {
	font-size: 20px;
}
.member {
	font-size: 12px;
	margin-top: 6px;
}
.logo {
	color: yellow;
	font-size: 20px;
}
.txt {
	color: white;
	font-size: 40px;
}
.comment {
	position: absolute;
	top: 35px;
	right: 10px;
}
</style>
