<script lang="ts">
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>AtensaiLabs - Innovation & Research</title>
  <meta name="description" content="Cutting-edge innovation lab specializing in tech projects and research" />
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 w-full z-50 glass-morphism">
  <div class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
        AtensaiLabs
      </div>
      <button class="glass-morphism px-6 py-2 rounded-full text-white hover:animate-glow transition-all duration-300">
        Contact
      </button>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section class="min-h-screen flex items-center justify-center relative overflow-hidden">
  <!-- Animated Background Elements -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-20 left-10 w-64 h-64 bg-cyber-blue rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple rounded-full blur-3xl animate-float" style="animation-delay: -1.5s;"></div>
    <div class="absolute top-1/2 left-1/2 w-48 h-48 bg-cyber-blue rounded-full blur-2xl animate-float" style="animation-delay: -3s;"></div>
  </div>
  
  <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
    <div class="space-y-8 {mounted ? 'animate-fade-in' : 'opacity-0'}">
      <!-- Main Heading -->
      <h1 class="text-6xl md:text-8xl font-black text-white leading-tight">
        <span class="block cyber-gradient bg-clip-text text-transparent">INNOVATION</span>
        <span class="block text-white">UNLEASHED</span>
      </h1>
      
      <!-- Subheading -->
      <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Cutting-edge technology projects and groundbreaking research that push the boundaries of what's possible
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
        <button class="cyber-gradient px-8 py-4 rounded-full text-white font-semibold text-lg hover:animate-glow transition-all duration-300 hover:scale-105">
          Explore Projects
        </button>
        <button class="glass-morphism px-8 py-4 rounded-full text-white font-semibold text-lg border border-gray-600 hover:border-cyber-blue transition-all duration-300 hover:scale-105">
          Our Research
        </button>
      </div>
    </div>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div class="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
      <div class="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-bounce"></div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="py-24 relative">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
        What We <span class="cyber-gradient bg-clip-text text-transparent">Create</span>
      </h2>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        From innovative tech solutions to groundbreaking research, we transform ideas into reality
      </p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Innovation Projects -->
      <div class="glass-morphism p-8 rounded-2xl hover:animate-glow transition-all duration-500 group">
        <div class="w-16 h-16 cyber-gradient rounded-full flex items-center justify-center mb-6 group-hover:animate-float">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-4">Innovation Projects</h3>
        <p class="text-gray-400 leading-relaxed">
          Breakthrough technology solutions that revolutionize industries and create new possibilities for the future.
        </p>
      </div>
      
      <!-- Research & Development -->
      <div class="glass-morphism p-8 rounded-2xl hover:animate-glow transition-all duration-500 group">
        <div class="w-16 h-16 cyber-gradient rounded-full flex items-center justify-center mb-6 group-hover:animate-float">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-4">Research & Development</h3>
        <p class="text-gray-400 leading-relaxed">
          Deep scientific research that pushes the boundaries of knowledge and discovers new frontiers in technology.
        </p>
      </div>
      
      <!-- Tech Consulting -->
      <div class="glass-morphism p-8 rounded-2xl hover:animate-glow transition-all duration-500 group">
        <div class="w-16 h-16 cyber-gradient rounded-full flex items-center justify-center mb-6 group-hover:animate-float">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-4">Tech Consulting</h3>
        <p class="text-gray-400 leading-relaxed">
          Expert guidance and strategic technology consulting to help organizations navigate the digital future.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Featured Work Section -->
<section class="py-24 relative">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
        Featured <span class="cyber-gradient bg-clip-text text-transparent">Work</span>
      </h2>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each Array(6) as _, i}
        <div class="glass-morphism rounded-2xl overflow-hidden hover:animate-glow transition-all duration-500 group">
          <div class="aspect-video bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:animate-float">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-3">Project {i + 1}</h3>
            <p class="text-gray-400">
              Innovative technology solution that showcases our cutting-edge capabilities and research excellence.
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="py-24 relative">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h2 class="text-4xl md:text-6xl font-bold text-white mb-8">
      Ready to <span class="cyber-gradient bg-clip-text text-transparent">Innovate?</span>
    </h2>
    <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
      Let's collaborate on your next breakthrough project or discuss how our research can benefit your organization.
    </p>
    <button class="cyber-gradient px-12 py-6 rounded-full text-white font-semibold text-xl hover:animate-glow transition-all duration-300 hover:scale-105">
      Get In Touch
    </button>
  </div>
</section>

<!-- Footer -->
<footer class="py-12 border-t border-gray-800">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="text-2xl font-bold cyber-gradient bg-clip-text text-transparent mb-4 md:mb-0">
        AtensaiLabs
      </div>
      <div class="text-gray-500">
        © 2025 AtensaiLabs. Innovation unleashed.
      </div>
    </div>
  </div>
</footer>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
</style>
