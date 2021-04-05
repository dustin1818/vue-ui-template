<template>
  <main class="bg-white-dark text-white-dark select-none font-poppins">
    <jmaqHero></jmaqHero>
    <jmaqBenefits></jmaqBenefits>
    <jmaqTestimonials></jmaqTestimonials>
    <jmaqNewsletter></jmaqNewsletter>
    <jmaqFooter></jmaqFooter>
  </main>
</template>

<script>
import "./jmaqStyles.scss";
import jmaqHero from "./jmaqHero";
import jmaqBenefits from "./jmaqBenefits";
import JmaqTestimonials from "./JmaqTestimonials";
import jmaqNewsletter from "./jmaqNewsletter";
import jmaqFooter from "./jmaqFooter";

export default {
  setup() {
    console.log("Jmaq Loaded");
  },
  components: {
    jmaqHero,
    jmaqBenefits,
    JmaqTestimonials,
    jmaqNewsletter,
    jmaqFooter,
  },
};
</script>